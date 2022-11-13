export const findDataByFilter = (data: any[], filter: Record<any, any>) => {
  return data.find((val: any) =>
    Object.keys(filter)
      .map((v) => filter[v] === val[v])
      .every((v) => v)
  );
};
