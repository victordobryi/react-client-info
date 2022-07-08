const enum Status {
  new = 'new',
  started = 'started',
  completed = 'completed',
  assigned_to = 'assigned_to',
  declined = 'declined'
}

export const getStatus = (status: string) => {
  switch (status) {
    case Status.new:
      return 'Новое';
    case Status.completed:
      return 'Выполнено';
    case Status.started:
      return 'Выполняется';
    case Status.declined:
      return 'Отменено';
    case Status.assigned_to:
      return 'Назначено';
  }
};
