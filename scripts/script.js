// Подключение необходимых модулей
const path = require("path"); // Модуль для работы с путями файлов и директорий
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Плагин для генерации HTML-файлов
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Плагин для извлечения CSS в отдельные файлы

// Вывод в консоль абсолютного пути до директории "src", используемой как контекст для сборки проекта
console.log(path.resolve(__dirname, "src"), 'path.resolve(__dirname, "src")');


// Функция для генерации имени файла с уникальным хэшем ([contenthash]) для кэширования
const getFileName = (ext) => `[name].[contenthash].${ext}`;

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "src"),
  
  // Режим сборки: разработка
  mode: "development",
  
  // Контекст сборки - директория "src"
  context: path.resolve(__dirname, "src"),

  
  // Точки входа для сборки проекта
  entry: {
    main: "./js/index.js", // Точка входа для основного приложения
    lib: "./js/lib.js", // Точка входа для вспомогательной библиотеки
  },




  // Конфигурация выходных файлов сборки
  output: {
    // Путь для сохранения сборки - директория "dist"
    path: path.resolve("dist"),
    
    // Имя выходного файла JavaScript-бандла, используется функция getFileName()
    filename: getFileName("js"),
    
    // Очистка директории "dist" перед каждой новой сборкой
    clean: true,
  },



  // Плагины, используемые в процессе сборки
  plugins: [
    // Генерация HTML-файла на основе указанного шаблона ("index.html")
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    
    // Извлечение CSS из JavaScript-бандла и сохранение в отдельный файл, используется функция getFileName()
    new MiniCssExtractPlugin({
      filename: getFileName("css"),
    }),
  ],

  
  // Правила обработки различных типов файлов
  module: {
    rules: [
      // Правило для файлов с расширением ".s[ac]ss" (как ".scss" и ".sass")
      {
        test: /\.s[ac]ss$/i, //.scss .sass
        
        // Используется MiniCssExtractPlugin.loader для извлечения CSS в отдельные файлы,
        // затем файл проходит через загрузчики css-loader и sass-loader
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      
      // Правило для файлов с расширением ".csv"
      {
        test: /\.csv$/,
        // Файлы с расширением .csv обрабатываются загрузчиком csv-loader
        use: ["csv-loader"],
      },
      
      // Правило для файлов с расширением ".xml"
      {
        test: /\.xml$/,
        // Файлы с расширением .xml обрабатываются загрузчиком xml-loader
        use: ["xml-loader"],
      },
    ],
  },
  
  // Псевдонимы для упрощения импорта модулей
  resolve: {
    alias: {
      // Псевдоним "@" для директории "./src"
      "@": path.resolve(__dirname, "./src"),
      
      // Псевдоним "@js" для директории "./src/js"
      "@js": path.resolve(__dirname, "./src/js"),
      
      // Псевдоним "@style" для директории "./src/styles"
      "@style": path.resolve(__dirname, "./src/styles"),
      
      // Псевдоним "@assets" для директории "./src/assets"
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
};
