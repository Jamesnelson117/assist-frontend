import { Component, Input, OnInit, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../store/services/auth.service";

@Component({
  selector: 'requests-comment',
  templateUrl: './request-comments.component.html'
})
export class RequestsCommentComponent implements OnInit {
  @Input() comments: Comment[];
  @Input() requestID: string;
  @Output() addCommentEventEmitter = new EventEmitter();
  errorMessage: string;
  addCommentIsVisible: boolean = false;
  newComment: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.newComment = this.formBuilder.group({
      message: ['', Validators.required],
    });
  };

  toggleFormVisibility() {
    this.addCommentIsVisible = !this.addCommentIsVisible;
  };

  addNewComment() {
    if(!this.newComment.valid) return this.errorMessage = "Not a valid comment";

    const comment = {
      author: this.authService.getUserId(),
      message: this.newComment.value.message
    };

    this.addCommentEventEmitter.emit({requestID: this.requestID, comment});
    this.addCommentIsVisible = false;
  };

  getCommentCount() {
    return `${this.comments.length} Comment${this.comments.length > 1 || this.comments.length == 0 ? 's' : ''}`;
  };
}