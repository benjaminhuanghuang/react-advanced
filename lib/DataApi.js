class DataApi {
  constructor(rawData) {
    this.rawData = rawData;
  }
  // array.reduce(callback, initialValue)
  mapIntoObject(arr) {
    return arr.reduce((accumulator, curr) => {
      accumulator[curr.id] = curr;
      return accumulator;
    }, {});
  }

  getArticles() {
    return this.mapIntoObject(this.rawData.articles);
  }

  getAuthers() {
    return this.mapIntoObject(this.rawData.authors);
  }
}

export default DataApi;