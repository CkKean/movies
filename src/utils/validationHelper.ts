import _ from "lodash";

export const isNullOrUndefined = (value?: any) => {
  return _.isNull(value) || _.isUndefined(value) || value === "";
};

export const isValidNumber = (value: any): boolean => {
  if (isNullOrUndefined(value)) {
    return false;
  }
  if (Number.isNaN(parseInt(value))) {
    return false;
  }
  if (isNaN(value)) {
    return false;
  }

  return true;
};
