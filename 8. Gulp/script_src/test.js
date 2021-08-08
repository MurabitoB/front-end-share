const this_is_a_hello_world_log = () => {
    const localVariable = 1;
    const localObject = { monkey: 'monkey' };
    console.log(localVariable);
    console.log(localObject);
    localObject.cat = 'cat';
    console.log('hello world');
}


destructor = { a: 1, b: 2, c: 3 };

const { a, ...rest } = destructor;