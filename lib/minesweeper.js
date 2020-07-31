'use babel';

import MinesweeperView from './minesweeper-view';
import {
  CompositeDisposable,
  Disposable
} from 'atom';

export default {

  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable(
      atom.workspace.addOpener(uri => {
        if (uri === 'atom://minesweeper')
          return new MinesweeperView();
      }),

      atom.commands.add('atom-workspace', {
        'minesweeper:toggle': () => this.toggle()
      }),

      new Disposable(() => {
        atom.workspace.getPaneItems().forEach(item => {
          if (item instanceof MinesweeperView) {
            item.destroy();
          }
        })
      })
    );
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  toggle() {
    let minesweeperViews = atom.workspace
      .getPaneItems()
      .filter(item => item instanceof MinesweeperView)
    atom.workspace.open(minesweeperViews[0] || 'atom://minesweeper');
  }
};
