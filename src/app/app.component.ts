import {Component, OnInit} from '@angular/core';
import {Global} from './common/global';
import {HttpClient} from '@angular/common/http';

class Post {
  constructor(
    public userId: number,
    public id: string,
    public title: string,
    public body: string
  ) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = Global.siteTitle;

  api = 'https://jsonplaceholder.typicode.com/posts';
  data = [];

  constructor(private http: HttpClient) {
    console.log(Global.apiURL);
  }

  ngOnInit(): void {
    console.log(this.title);
    this.getPosts();
  }

  getPosts(): any {
    return new Promise((resolve, reject) => {
      const apiURL = this.api;
      this.http
        .get<Post[]>(apiURL)
        .toPromise()
        .then((res: any) => {
            // Success
            // tslint:disable-next-line
            this.data = res.map((res: any) => {
              return new Post(
                res.userId,
                res.id,
                res.title,
                res.body
              );
            });
            resolve('sd');
          },
          err => {
            // Error
            reject(err);
          }
        );
    });
  }

}
