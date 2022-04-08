import httpService from './http.service';

const questionEndPoint = 'question/';

const questionService = {
  get: async () => {
    const { data } = await httpService.get(questionEndPoint);
    return data;
  },
};

export default questionService;
