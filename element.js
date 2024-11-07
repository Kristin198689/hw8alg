class Stack {
  constructor() {
    this.items = []; // Используем массив для хранения элементов стека
  }

  // Метод проверки на пустоту стека
  empty() {
    return this.items.length === 0;
  }

  // Метод добавления нового элемента в стек
  push(element) {
    this.items.push(element);
  }

  // Метод удаления верхнего элемента из стека
  pop() {
    if (this.empty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Метод возвращения верхнего элемента без его удаления
  peek() {
    if (this.empty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Метод поиска элемента и возврата его позиции от вершины
  search(element) {
    // Ищем элемент, начиная с конца массива
    for (let i = this.items.length - 1; i >= 0; i--) {
      if (this.items[i] === element) {
        // Возвращаем позицию элемента от вершины
        return this.items.length - 1 - i;
      }
    }
    return -1; // Если элемент не найден, возвращаем -1
  }
}
