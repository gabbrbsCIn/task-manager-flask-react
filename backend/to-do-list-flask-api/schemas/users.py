from app import ma


class UsuarioSchema(ma.Schema):
    class Meta: 
        fields = ('id', 'nome', 'email')

usuario_schema = UsuarioSchema()
usuarios_schema = UsuarioSchema(many=True)