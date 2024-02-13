import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import trackerReducer from '../reducers';

const persistConfig = {
 key: 'root',
 storage: storage,
// blacklist: ['trackers', 'nextId'],
 stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, trackerReducer);

export const store = createStore(pReducer);
export const persistor = persistStore(store);
