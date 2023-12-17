import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToDoFormComponent } from '../to-do-form/to-do-form.component';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent implements OnInit {
  list = [
    { id: 1, name: 'Playing', description: 'Play Badminton' },
    { id: 2, name: 'Cooking', description: 'Making Tea' },
    { id: 3, name: 'Swimming', description: 'Go to Swimming in the pool' },
    { id: 4, name: 'Exercise', description: 'Skipping, jumping, Running and walking' },
    { id: 5, name: 'Study', description: 'Learn Angular and Make Project' },
  ];
  listCopy: any = [];

  constructor(public dialog: MatDialog) {

  }

  ngOnInit() {
    this.listCopy = [...this.list];
  }

  openDialog() {
    const dialogRef = this.dialog.open(ToDoFormComponent, {
      width: '40vw',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let count = 0;
        if (this.list.length > 0) {
          count = this.list[this.list.length - 1].id + 1;
        } else {
          count = 1;
        }

        Object.assign(result, { id: count });
        this.list.push(result);
        this.listCopy.push(result);
      }
    });
  }

  delete(id: number) {
    const index = this.list.findIndex((x) => id == x.id);
    this.list.splice(index, 1);
    this.listCopy.splice(index, 1);
  }
  search(event: any) {
    let searchText = event.value.toLowerCase();
    this.list = this.listCopy;
    this.list = this.list.filter((x) => x.name.toLowerCase().includes(searchText) || x.description.toLowerCase().includes(searchText))
  }

}
