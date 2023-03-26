import { createAction } from '@reduxjs/toolkit';
import type { Repository } from '../models/Repository';

export default createAction<Repository>('repo/repo-added');
