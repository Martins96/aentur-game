import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FrozenmountainsBossFailureComponent } from '../popup/frozenmountains-boss-failure/frozenmountains-boss-failure.component';
import { FrozenmountainsBossSuccessComponent } from '../popup/frozenmountains-boss-success/frozenmountains-boss-success.component';

@Component({
  selector: 'app-frozenmountains-scenario-boss',
  templateUrl: './frozenmountains-scenario-boss.component.html',
  styleUrls: ['./frozenmountains-scenario-boss.component.css']
})
export class FrozenmountainsScenarioBossComponent implements OnInit {

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

    this.dialogSuccess.open(FrozenmountainsBossSuccessComponent, dialogConfig);
  }
  openDialogFailure() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";
    dialogConfig.enterAnimationDuration = "1000ms"
    dialogConfig.closeOnNavigation = true;

    this.dialogFail.open(FrozenmountainsBossFailureComponent, dialogConfig);
  }

}
