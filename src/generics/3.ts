function merge <T1 extends object, T2 extends object>(objA: T1, objB: T2): T1 & T2
{
    return Object.assign<T1, T2>(objA, objB);
}