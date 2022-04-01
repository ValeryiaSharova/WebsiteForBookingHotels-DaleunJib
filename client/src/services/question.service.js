import httpService from './http.service';

const questionEndPoint = 'questions/';

const questionService = {
  get: async () => {
    const { data } = await httpService.get(questionEndPoint);
    return data;
  },
};

export default questionService;
