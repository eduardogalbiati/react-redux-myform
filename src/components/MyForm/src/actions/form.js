export const FIELD_UPDATE = 'FIELD_UPDATE';
export function updateField(data) {
    return {
      type: 'FIELD_UPDATE',
      payload: {
        data
      }
    }
};

export const FIELD_INIT = 'FIELD_INIT';
export function initField(data) {
    return {
      type: 'FIELD_INIT',
      payload: {
        data
      }
    }
};
