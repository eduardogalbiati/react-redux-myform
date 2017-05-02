export const FIELD_UPDATE = 'FIELD_UPDATE';
export function updateField(payload) {
    return {
      type: 'FIELD_UPDATE',
      payload
    }
};

export const FIELD_INIT = 'FIELD_INIT';
export function initField(payload) {
    return {
      type: 'FIELD_INIT',
      payload
    }
};

export const FIELD_BLUR = 'FIELD_BLUR';
export function blurField(payload) {
    return {
      type: 'FIELD_BLUR',
      payload
    }
};
