
import tensorflow as tf
from tensorflow.python.keras.models import load_model

import tensorflowjs as tfjs

# This function returns a new loaded Keras model from a filename source directory
def load (filename):
    return load_model(filename + '.h5')

# The target directory of the converted model
tfjs_target_dir = './models'

# Load the model from the .h5 file
model = load('./models/FaceRecognition_CNN')

# Convert the loaded model (FaceRecognition_CNN.h5 in this example) to the Tensorflow.js format
tfjs.converters.save_keras_model(model, tfjs_target_dir)

print("Conversion Success!")
