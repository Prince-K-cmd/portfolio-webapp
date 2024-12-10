export const codeSnippets = {
  android: [
    {
      title: 'Jetpack Compose UI',
      code: `@Composable
fun AnimatedButton(
    text: String,
    onClick: () -> Unit
) {
    var clicked by remember { mutableStateOf(false) }
    
    Button(
        onClick = {
            clicked = true
            onClick()
        },
        modifier = Modifier.animateContentSize()
    ) {
        AnimatedContent(
            targetState = clicked,
            transitionSpec = {
                fadeIn() with fadeOut()
            }
        ) { isClicked ->
            Text(
                text = if (isClicked) "Done!" else text,
                modifier = Modifier.padding(8.dp)
            )
        }
    }
}`
    },
    {
      title: 'Kotlin Flow',
      code: `class DataRepository(
    private val api: ApiService,
    private val db: LocalDatabase
) {
    fun getItems() = flow {
        emit(Resource.Loading)
        try {
            val data = api.fetchItems()
            db.saveItems(data)
            emitAll(
                db.observeItems()
                    .map { Resource.Success(it) }
            )
        } catch (e: Exception) {
            emit(Resource.Error(e))
        }
    }`
    }
  ],
  frontend: [
    {
      title: 'React Custom Hook',
      code: `function useLocalStorage<T>(
    key: string,
    initialValue: T
): [T, (value: T) => void] {
    const [storedValue, setStoredValue] = 
        useState<T>(() => {
            try {
                const item = window.localStorage
                    .getItem(key)
                return item ? JSON.parse(item) 
                    : initialValue
            } catch (error) {
                return initialValue
            }
        })

    const setValue = (value: T) => {
        try {
            setStoredValue(value)
            window.localStorage
                .setItem(key, JSON.stringify(value))
        } catch (error) {
            console.error(error)
        }
    }

    return [storedValue, setValue]
}`
    }
  ],
  data: [
    {
      title: 'Spark Streaming',
      code: `def process_stream(spark: SparkSession):
    schema = StructType([
        StructField("timestamp", TimestampType()),
        StructField("device_id", StringType()),
        StructField("metrics", MapType(
            StringType(), 
            DoubleType()
        ))
    ])

    stream = spark.readStream \\
        .format("kafka") \\
        .option("kafka.bootstrap.servers", 
                "localhost:9092") \\
        .load()

    parsed = stream.select(
        from_json(
            col("value").cast("string"), 
            schema
        ).alias("data")
    ).select("data.*")`
    }
  ]
};