import os
import time
import datetime
from importlib import import_module
from flask import Flask,render_template,Response
import psutil #sudo pip3 install psutil

# import camera driver
if os.environ.get('CAMERA'):
    Camera = import_module('camera_' + os.environ['CAMERA']).Camera
else:
    from camera import Camera

# Raspberry Pi camera module (requires picamera package)
# from camera_pi import Camera

def measure_temp():
        temp = os.popen("vcgencmd measure_temp").readline()
        return (temp.replace("temp=",""))

def get_cpu_usage():
        #return str(os.popen("top -n1 | awk '/Cpu\(s\):/ {print $2}'").readline().strip(\))
        cpu_usage = psutil.cpu_percent()
        return (str(cpu_usage))
        #return ("2")
        
app = Flask(__name__) 
@app.route("/")
def index():
   now = datetime.datetime.now()
   dateStr = now.strftime("%Y-%m-%d")
   timeStr = now.strftime("%H:%M:%S")
   templateData = {
      "title" : "RPi Infos",
      "date": dateStr,
      "timeJS": timeStr}
   return render_template('t_index.html',**templateData)
      
@app.route("/temp")
def temp():
   data=["Temperature","RPi temperature: ",measure_temp()]
   return render_template('t_temp.html',data=data)
    
@app.route("/cpu")
def cpu():
    data=["CPU Page","CPU usage: ",get_cpu_usage()]
    return render_template('t_cpu.html',data=data)

@app.route('/stream')
def stream():
    """Video streaming home page."""
    return render_template('stream2.html')

def gen(camera):
    """Video streaming generator function."""
    while True:
        frame = camera.get_frame()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')


@app.route('/stream/video_feed')
def video_feed():
    """Video streaming route. Put this in the src attribute of an img tag."""
    return Response(gen(Camera()),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route("/flexbox")
def flex():
    return render_template('flexbox.html')



if __name__ == "__main__":
 app.run(host='0.0.0.0',port=5003,debug=True,threaded=True)
