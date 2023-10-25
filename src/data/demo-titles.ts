export const DEMO_TITLES: {[key: string]: string} = { 
    resnet50: 'ResNet50, trained on ImageNet', 
    yolo: 'Yolo, real-time object detection'
  };
  
  export const DEMO_DESCRIPTIONS: {[key: string]: string} = {
    resnet50: 'ResNet50, a deep convolutional network for image classification. ', 
    yolo: 'YOLO can detect multiple objects in an image and puts bounding boxes around these objects.'
  };
  
  export const DEMO_MODEL_LINKS: {[key: string]: string} = {
    resnet50:  'https://github.com/onnx/models/tree/master/models/image_classification/resnet',
    yolo:'https://github.com/onnx/models/tree/master/tiny_yolov2'
  };