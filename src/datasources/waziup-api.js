const { RESTDataSource } = require('@apollo/datasource-rest');

class WaziupAPI extends RESTDataSource {
  constructor() {
    super('https://api.waziup.io/api/v2');
  }

  async authenticate(username, password) {
    const response = await this.request({
      method: 'POST',
      url: '/auth/token',
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();
    return data.token;
  }

  async fetchData(url, token) {
    const response = await this.request({
      method: 'GET',
      url,
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return data;
  }

  async getDevices() {
    const token = await this.authenticate('nedarctic@gmail.com', '40703326002');
    const devices = await this.fetchData('/auth/permissions/devices', token);
    return devices;
  }

  async getDevice(id) {
    const token = await this.authenticate('nedarctic@gmail.com', '40703326002');
    const device = await this.fetchData(`/devices/${id}`, token);
    return device;
  }

  async getSensors(deviceId) {
    const token = await this.authenticate('nedarctic@gmail.com', '40703326002');
    const sensors = await this.fetchData(`/devices/${deviceId}/sensors`, token);
    return sensors;
  }

  async getSensorData(deviceId, sensorId) {
    const token = await this.authenticate('nedarctic@gmail.com', '40703326002');
    const sensorData = await this.fetchData(`/devices/${deviceId}/sensors/${sensorId}`, token);
    return sensorData;
  }
}

module.exports =  WaziupAPI;
