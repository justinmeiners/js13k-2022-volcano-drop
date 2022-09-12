import bpy
import os


def write_obj(obj, material_lookup, dg, f):

    mesh = obj.to_mesh(preserve_all_data_layers=True, depsgraph=dg)
    
    coords = []
    for v in mesh.vertices:
        for i in range(0, 3):
            coords.append("{:.2f}".format( v.co[i] ))

    materials = []
    faces = []
    for polygon in mesh.polygons:
        material_name = mesh.materials[polygon.material_index].name
        materials.append(str(material_lookup[material_name]))

        for l in polygon.loop_indices:
            faces.append(str(mesh.loops[l].vertex_index))


    f.write('''
    const {0}_MODEL = {{
        verts: [{1}],
        faces: [{2}],
        materials: [{3}]
    }};
    '''.format(
        obj.name.upper(),
        ','.join(coords),
        ','.join(faces),
        ','.join(materials)
        )
    )

def build_color_table(objs):
    table = {}
    for obj in objs:
        for material in obj.data.materials:
            if not material.name in table:
                table[material.name] = [int(c * 255.0) for c in material.diffuse_color]
    return table


def write_colors(table, f):
    colors = []
    for key, color in color_table.items():
        for i in range(0, 3):
            colors.append(str(color[i]));

    f.write('''
    const MATERIALS = [
        {0}
    ];
    '''.format(','.join(colors))
    )


with open(os.path.expanduser('~/models.js'), 'w') as f:
    color_table = build_color_table(bpy.context.selected_objects)

    write_colors(color_table, f)

    material_lookup = {k: i for (i, k) in enumerate(color_table)}

    depsgraph = bpy.context.evaluated_depsgraph_get()
    for obj in bpy.context.selected_objects:
        obj2 = obj.evaluated_get(depsgraph)
        write_obj(obj2, material_lookup, depsgraph, f)


