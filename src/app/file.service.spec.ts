import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";

import { FileService } from "./file.service";

describe("FileService", () => {
  let service: FileService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(FileService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
