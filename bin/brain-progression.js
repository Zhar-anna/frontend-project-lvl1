#!/usr/bin/env node

import { gameFunction, conditions } from '../src/games/progression.js';
import gameLogic from '../src/index.js';

gameLogic(gameFunction, conditions);
