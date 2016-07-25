class List {
  constructor() {
    this.NotificationRepository = [];
  }

  render(input) {
    this.NotificationRepository.push(input);
  }

  getList() {
      return this.NotificationRepository;
  }
}

module.exports = List;