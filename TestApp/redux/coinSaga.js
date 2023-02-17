import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {getCoinSuccess} from './coin'

function* workGetCoinFetch() {
  const coins = yield call(() =>
    axios.get('https://api.coinpaprika.com/v1/coins'),
    yield put(getCoinSuccess(coins.data)) 
  );
}

function* coinSaga() {
  yield takeEvery('coin/getCoinSuccess', workGetCoinFetch);
}
export default coinSaga