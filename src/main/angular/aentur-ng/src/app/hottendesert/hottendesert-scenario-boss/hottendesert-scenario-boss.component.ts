import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HottendesertBossFailureComponent } from '../popup/hottendesert-boss-failure/hottendesert-boss-failure.component';
import { HottendesertBossSuccessComponent } from '../popup/hottendesert-boss-success/hottendesert-boss-success.component';

@Component({
  selector: 'app-hottendesert-scenario-boss',
  templateUrl: './hottendesert-scenario-boss.component.html',
  styleUrls: ['./hottendesert-scenario-boss.component.css']
})
export class HottendesertScenarioBossComponent implements OnInit {

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

    this.dialogSuccess.open(HottendesertBossSuccessComponent, dialogConfig);
  }
  openDialogFailure() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";
    dialogConfig.enterAnimationDuration = "1000ms"
    dialogConfig.closeOnNavigation = true;

    this.dialogFail.open(HottendesertBossFailureComponent, dialogConfig);
  }

}
