from flask import Flask, render_template

app = Flask(__name__)

# Ruta para la página principal
@app.route('/')
def home():
    return render_template('index.html')

# Ruta para la página "Sobre Nosotros"
@app.route('/sobre-nosotros')
def sobre_nosotros():
    return render_template('sobre-nosotros.html')

# Ruta para la página de registro
@app.route('/registro')
def registro():
    return render_template('registro.html')

# Ruta para la página de base de datos
@app.route('/base-datos')
def base_datos():
    return render_template('base-datos.html')

#ruta para la pagina de agendar cita
@app.route('/citas')
def citas():
    return render_template('citas.html')

#ruta para la pagina de agendar cita
@app.route('/diagnostico', endpoint='diagnostico')
def diagnostico():
    return render_template('diagnostico.html')

if __name__ == '__main__':
    app.run(debug=True)
