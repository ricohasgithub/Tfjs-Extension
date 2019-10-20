
import 'babel-polyfill';
import * as tf from '@tensorflow/tfjs';

// URL path to the saved model file (keras .h5 format)
const MODEL_URL = '';
// Size of the image expected by the model Keras model (96*96)
const IMAGE_SIZE = 96;

// Number of predictions that the model should make
const N_PREDICTIONS = 2;
// Constant 5 second in milliseconds variable for easy reference
const FIVE_SECONDS_IN_MS = 5000;

// TODO: Function that will detect the action for webcame image access (user document.getElementById with getUserMedia? or Canvas 2D?) https://stackoverflow.com/questions/50991321/chrome-extension-getusermedia-throws-notallowederror-failed-due-to-shutdown
function actionListener () {
  // FaceClassifier.analyzeImage();
}

class FaceClassifier {

  // Default constructor for the model, loads a new model
  constructor () {
    this.loadModel();
  }

  async loadModel () {

    // Log method call
    console.log("Loading model...");

    // Load and compile network. See if the provided model URL is valid
    try {

      // Load the Keras Model into the tfjs format
      this.model =
        await tf.loadLayersModel(MODEL_URL);
      // Warms up the model by causing intermediate tensor values to be built and pushed to GPU.
      tf.tidy(() => {
        this.model.predict(tf.zeros([1, IMAGE_SIZE, IMAGE_SIZE, 3]));
      });

      // Track and output model performance
      const totalTime = Math.floor(performance.now() - startTime);
      console.log("Model loaded and initialized in ${totalTime} ms...");

    } catch {
      // Catch unable to find model error from source (Model URL)
      console.error(
            "Unable to load model from URL: ${MODEL_URL}");
    }

  }

  async analyzeImage () {

  }

}
