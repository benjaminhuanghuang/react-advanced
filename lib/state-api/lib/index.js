class DataApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors)
    };
  }
  // array.reduce(callback, initialValue)
  mapIntoObject(arr) {
    return arr.reduce((accumulator, curr) => {
      accumulator[curr.id] = curr;
      return accumulator;
    }, {});
  }

  getState()
  {
    return this.data;
  }
}

export default DataApi;