export class CounterService {
  activeCount(count: number) {
      console.log("To Active " + count);
  }

  inactiveCount(count: number) {
    console.log("To Inactive " + count);
  }
}
