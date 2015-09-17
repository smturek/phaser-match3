var Match3 = Match3 || {};

Match3.Board = function(state, rows, cols, blockVariations) {
    this.state = state;
    this.rows = rows;
    this.cols = cols;
    this.blockVariations = blockVariations;

    //main grid
    this.grid = [];

    var i, j;
    for(i = 0; i < this.rows; i++) {
        this.grid.push([]);

        for(j = 0; j < this.cols; j++) {
            this.grid[i].push(0);
        }
    }
    console.log(this.grid);

    //reserve grid on the top for when new bricks are needed
    this.reserveGrid = [];
    this.RESERVE_ROW = 5;

    for(i = 0; i < this.RESERVE_ROW; i++) {
        this.reserveGrid.push([]);

        for(j = 0; j < this.cols; j++) {
            this.reserveGrid[i].push(0);
        }
    }
    console.log(this.reserveGrid);
};
