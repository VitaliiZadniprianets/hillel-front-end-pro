window.onload = function() {
    let number = 1;
  
    function createCell() {
      const cell = document.createElement("td");
      cell.textContent = number++;
      return cell;
    };
  
    function createRow() {
      const row = document.createElement("tr");
  
      for (let j = 1; j <= 10; j++) {
        const cell = createCell();
        row.append(cell);
      };
  
      return row;
    };
  
    function createTable() {
      const table = document.createElement("table");
  
      for (let i = 1; i <= 10; i++) {
        const row = createRow();
        table.append(row);
      };
  
      return table;
    };
  
    setTimeout(function() {
      const table = createTable();
      document.body.append(table);
    }, 3000);
};