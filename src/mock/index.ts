const mock = [
  {
    url: '/api/test',
    method: 'get',
    response: () => {
      return {
        status: 200,
        message: 'success',
        data: {
          dat: '1111'
        }
      };
    }
  }
];

export default mock;
