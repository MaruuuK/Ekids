import GameBar from './classes/game-bar';
import StatisticsStorage from './classes/stat/storage';

export const mainContent = document.getElementById('main-content');

export const sidebarMenu = document.getElementById('sidebar-menu');

export const gameBar = new GameBar();

export const statStorage = new StatisticsStorage();

export const words = [];
