class ResourcePool {
  _available;
  _allocated;

  getResource() {
    let result;
    try {
      result = this._available.pop()
      this._allocated.push(result)
      return result
    } catch (error) {
      result = new Resource()
      this._allocated.push(result)
      return result      
    }
  }
}


class ResourcePool {
  _available;
  _allocated;

  getResource() {
    let result;
    if(this._available.isEmpty()) {
      result = new Resource()
    } else {
      result = this._available.pop()
    }
    this._allocated.push(result)
    return result
  }
}


