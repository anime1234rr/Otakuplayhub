<!DOCTYPE html> 
<html lang="es">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">

    </head>

   <form method="post" action="./php/enviarcomentario.php">
    <section id="contact">
        <div class="container px-4">
            <div> class="row gx-4 justify-content-center">
                <div class="col-lg-8">
                    <h2>caja de comentarios</h2>
                   <br>
                    <div class="form-floating mb-3">
                        <input class="form-control" id="nombre" name="nombre" type="text" placeholder="Nombre" required />
                        <label for="nombre">Nombre</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input class="form-control" id="email" name="email" type="email" placeholder="Email" required />
                        <label for="email">Email</label>
                    </div>
                    <div class="form-floating mb-3">
                        <textarea class="form-control" id="comentario" name="comentario" type="text" placeholder="Comentario" style="height: 10rem;" required></textarea>
                        <label for="comentario">Comentario</label>
                    </div>
                    <button class="btn btn-primary btn-xl text-uppercase" id="submitButton" type="submit">Enviar</button> 


    </section>    


</html>