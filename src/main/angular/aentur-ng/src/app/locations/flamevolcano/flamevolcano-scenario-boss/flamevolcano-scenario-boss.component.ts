import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FlamevolcanoBossFailureComponent } from '../popup/flamevolcano-boss-failure/flamevolcano-boss-failure.component';
import { FlamevolcanoBossSuccessComponent } from '../popup/flamevolcano-boss-success/flamevolcano-boss-success.component';

@Component({
  selector: 'app-flamevolcano-scenario-boss',
  templateUrl: './flamevolcano-scenario-boss.component.html',
  styleUrls: ['./flamevolcano-scenario-boss.component.css']
})
export class FlamevolcanoScenarioBossComponent implements OnInit {

  constructor(
    private dialogSuccess: MatDialog,
    private dialogFail: MatDialog
    ) { }

  ngOnInit(): void {
  }

  bossOver(status: string): void {
    if (status === 'failed') {
      console.debug("Boss fight failed");
      this.openDialogFailure();
    } else if (status === 'success') {
      console.debug("Boss fight success");
      this.openDialogSuccess();
    } else {
      console.error("Not understand the status " + status);
    }
  }

  openDialogSuccess() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";
    dialogConfig.enterAnimationDuration = "1000ms"
    dialogConfig.closeOnNavigation = true;

    this.dialogSuccess.open(FlamevolcanoBossSuccessComponent, dialogConfig);
  }
  openDialogFailure() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";
    dialogConfig.enterAnimationDuration = "1000ms"
    dialogConfig.closeOnNavigation = true;

    this.dialogFail.open(FlamevolcanoBossFailureComponent, dialogConfig);
  }

}
