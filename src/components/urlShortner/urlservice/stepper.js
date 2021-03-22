import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
     
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    color:'tomato',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Please paste URL', 'Select Domain', 'Generate'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Please paste URL';
    case 1:
      return 'Select domain';
    case 2:
      return 'Generate Short Url';
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper({nextStepper}) {
  console.log(nextStepper,"this is next Stepper");
  var stepperSteps = nextStepper;
  console.log(stepperSteps,"this is stepperSteps");
  const classes = useStyles();
//   const [activeStep, setActiveStep] = React.useState(0);
  var activeStep = 0;
  const steps = getSteps();
  console.log(activeStep,"this is activeStep");
//   const handleReset = () => {
//     activeStep = 0;
   
//   };
  const handleNext = () => {
    activeStep = nextStepper         
  };    
//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   }; 
    handleNext()
    
  return (
    <div className={classes.root}>
      <Stepper className="stepperBackground" activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            {/* <Button onClick={handleReset}>Reset</Button> */}
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              {/* <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button> */}
              
              {/* <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
