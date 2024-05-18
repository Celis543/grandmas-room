//objectDescriptions.js

//contains objects for all the methods of making and descriptions for each object
export function objectDescriptions() {
    const vanity = {
        method: "modeled with blender; image used as texture",
        description: "This is a bronze vanity mirror made by the art deco artist Erte that was featured prominently in my grandmother's room. "
    }
    const statue = {
        method: "3D scanned and edited in blender",
        description: "A statue of Moses my grandma had in her room."

    }
    const dresser = {
        method: "3D scanned and edited in blender",
        description: "A dresser, part of a set of white wicker furniture in my grandmother's room. There is a crocheted doily on top that she made, and atop that is where the vanity mirror sits.."
    }

    const dolls = {
        method: "3D scanned and edited in blender",
        description: "Two wooden dolls that I would play with as a child. They had bells inside them, so that they would tinkle as they rocked back and forth."
    }

    const picture = {
        method: "3D scanned and edited in blender",
        description: "A portrait of my grandmother from when she was younger. It hung on the wall above her recliner."
    }
    return { vanity, statue, dresser, dolls, picture };
}