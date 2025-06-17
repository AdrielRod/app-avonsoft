#!/bin/bash
# Script para criar uma estrutura de módulo em 'src/modules/'

read -p "Enter the name of the new module (type only lowercase letters): " FOLDER_NAME

read -p "Enter the module screen name (use the CamelCase pattern): " SCREEN_NAME

mkdir -p "src/modules/$FOLDER_NAME/mobile/components"
mkdir -p "src/modules/$FOLDER_NAME/mobile/screens/$SCREEN_NAME"
mkdir -p "src/modules/$FOLDER_NAME/business"

COMPONENTS_INDEX_PATH="src/modules/$FOLDER_NAME/mobile/components/index.ts"
echo "//example" > $COMPONENTS_INDEX_PATH
echo "//export { default as NameComponent } from '@modules/$FOLDER_NAME/mobile/components/NameComponent';" >> $COMPONENTS_INDEX_PATH

SCREENS_INDEX_PATH="src/modules/$FOLDER_NAME/mobile/screens/index.ts"
echo "//example" > $SCREENS_INDEX_PATH
echo "export { default as $SCREEN_NAME } from '@modules/$FOLDER_NAME/mobile/screens/$SCREEN_NAME';" >> $SCREENS_INDEX_PATH

mkdir -p "src/modules/$FOLDER_NAME/mobile/screens/$SCREEN_NAME"
echo "const $SCREEN_NAME = () => {" >> "src/modules/$FOLDER_NAME/mobile/screens/$SCREEN_NAME/index.tsx"
echo "  return <></>;" >> "src/modules/$FOLDER_NAME/mobile/screens/$SCREEN_NAME/index.tsx"
echo "};" >> "src/modules/$FOLDER_NAME/mobile/screens/$SCREEN_NAME/index.tsx"
echo "" >> "src/modules/$FOLDER_NAME/mobile/screens/$SCREEN_NAME/index.tsx"
echo "export default $SCREEN_NAME;" >> "src/modules/$FOLDER_NAME/mobile/screens/$SCREEN_NAME/index.tsx"

echo -e "\033[34m------------------------------------------------------------\033[0m"
echo -e "\033[32mEstrutura de módulo '$FOLDER_NAME' criada com sucesso.\033[0m"
echo -e "\033[34m------------------------------------------------------------\033[0m"
