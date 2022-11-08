import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DarkwoodBossFailureComponent } from '../popup/darkwood-boss-failure/darkwood-boss-failure.component';
import { DarkwoodBossSuccessComponent } from '../popup/darkwood-boss-success/darkwood-boss-success.component';

@Component({
  selector: 'app-darkwood-scenario-boss',
  templateUrl: './darkwood-scenario-boss.component.html',
  styleUrls: ['./darkwood-scenario-boss.component.css']
})
export class DarkwoodScenarioBossComponent implements OnInit {

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

    this.dialogSuccess.open(DarkwoodBossSuccessComponent, dialogConfig);
  }
  openDialogFailure() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";
    dialogConfig.enterAnimationDuration = "1000ms"
    dialogConfig.closeOnNavigation = true;

    this.dialogFail.open(DarkwoodBossFailureComponent, dialogConfig);
  }

}
