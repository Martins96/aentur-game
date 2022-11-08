import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { IcelandBossFailureComponent } from '../popup/iceland-boss-failure/iceland-boss-failure.component';
import { IcelandBossSuccessComponent } from '../popup/iceland-boss-success/iceland-boss-success.component';

@Component({
  selector: 'app-iceland-scenario-boss',
  templateUrl: './iceland-scenario-boss.component.html',
  styleUrls: ['./iceland-scenario-boss.component.css']
})
export class IcelandScenarioBossComponent implements OnInit {

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

    this.dialogSuccess.open(IcelandBossSuccessComponent, dialogConfig);
  }
  openDialogFailure() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";
    dialogConfig.enterAnimationDuration = "1000ms"
    dialogConfig.closeOnNavigation = true;

    this.dialogFail.open(IcelandBossFailureComponent, dialogConfig);
  }

}
