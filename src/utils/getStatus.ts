const enum Status {
  new = 'new',
  started = 'started',
  completed = 'completed',
  assigned_to = 'assigned_to',
  declined = 'declined',
}

export const getStatus = (status: string) => {
  switch (status) {
    case Status.new:
      return { status: 'Новое', color: '#ba4946' };
    case Status.completed:
      return { status: 'Выполнено', color: '#169427' };
    case Status.started:
      return { status: 'Выполняется', color: '#2e77b3' };
    case Status.declined:
      return { status: 'Отменено', color: '#202020' };
    case Status.assigned_to:
      return { status: 'Назначено', color: '#c8921b' };
    default:
      return { status: 'Not found', color: '#bdb9b9' };
  }
};
