export default ({ dispatch, getState }) => next => action => {
  const {
    types,
    callAPI,
    shouldCallAPI = state => true,
    payload = {}
  } = action;

  if (!types) {
    return next(action);
  }

  if (
    !Array.isArray(types) ||
    types.length !== 3 ||
    !types.every(type => typeof type === "string")
  ) {
    throw new Error("Expectd an array of three string types.");
  }

  if (typeof callAPI !== "function") {
    throw new Error("Expected callAPI to be a function.");
  }

  if (!shouldCallAPI(getState())) {
    return;
  }

  const [requestType, successType, failureType] = types;
  dispatch(
    Object.assign(
      {},
      { payload: payload },
      {
        type: requestType
      }
    )
  )
  return callAPI().then(
    response =>
      dispatch(
        Object.assign(
          {},
          { payload: payload },
          {
            response,
            type: successType
          }
        )
      ),
    error =>
      dispatch(
        Object.assign(
          {},
          { payload: payload },
          {
            error,
            type: failureType
          }
        )
      )
  );
};
