export interface IMethod {
  title: string;
  hexColor: string;
  code: Number;
}

export const methods: IMethod[] = [
  {
    title: 'GET',
    hexColor: '#38ada9',
    code: 0,
  },
  {
    title: 'POST',
    hexColor: '#82ccdd',
    code: 1,
  },
  {
    title: 'PUT',
    hexColor: '#FD7272',
    code: 2,
  },
  {
    title: 'HEAD',
    hexColor: '#B33771',
    code: 3,
  },
  {
    title: 'DELETE',
    hexColor: '#ff4d4d',
    code: 4,
  },
  {
    title: 'CONNECT',
    hexColor: '#706fd3',
    code: 5,
  },

  {
    title: 'OPTIONS',
    hexColor: '#cc8e35',
    code: 6,
  },
  {
    title: 'TRACE',
    hexColor: '#ff6b81',
    code: 7,
  },
  {
    title: 'PATCH',
    hexColor: '#00d8d6',
    code: 8,
  },
];
