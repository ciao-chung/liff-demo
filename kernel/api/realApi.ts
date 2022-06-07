import { EagleApiInterface, EagleModuleApiInterface } from 'kernel/api/api'

export default (api: EagleApiInterface) => {
  api.collection.baseApi = {
    application: async () => ({}),
  }
}
