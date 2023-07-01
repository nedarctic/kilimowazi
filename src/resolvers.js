const resolvers = {
  Query: {
    devices: async (_, args, { context }) => {
      const waziupAPI = context.waziupAPI;
      const devices = await waziupAPI.getDevices();
      return devices;
    },
    device: async (_, args, { context }) => {
      const waziupAPI = context.waziupAPI;
      const device = await waziupAPI.getDevice(args.id);
      return device;
    },
  },
};

module.exports = resolvers;
